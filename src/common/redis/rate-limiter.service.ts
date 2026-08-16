import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { RedisService } from './redis.service';

@Injectable()
export class RateLimiterService {
  private readonly logger = new Logger(RateLimiterService.name);

  constructor(private readonly redisService: RedisService) {}

  async checkRateLimit(
    prefix: string,
    identifier: string,
    maxAttempts: number,
    ttlSeconds: number,
  ): Promise<void> {
    if (!identifier) {
      return;
    }

    const cleanIdentifier = identifier.trim().toLowerCase();
    const key = `ratelimit:${prefix}:${cleanIdentifier}`;

    const currentAttempts = await this.redisService.incr(key);

    if (currentAttempts === 1) {
      await this.redisService.expire(key, ttlSeconds);
    }

    if (currentAttempts > maxAttempts) {
      const remainingTtl = await this.redisService.ttl(key);
      const minutesRemaining = Math.max(1, Math.ceil((remainingTtl > 0 ? remainingTtl : ttlSeconds) / 60));

      this.logger.warn(
        'Rate limit exceeded',
        JSON.stringify({
          prefix,
          identifier: cleanIdentifier,
          currentAttempts,
          maxAttempts,
          ttlSeconds,
          remainingTtl,
        }),
      );

      throw new HttpException(
        `Too many attempts for ${prefix.replace('-', ' ')}. Please try again after ${minutesRemaining} minutes.`,
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
  }
}
