import { Controller, Post, Body, UseGuards, HttpCode, HttpStatus, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { SwitchOrganizationDto } from './dto/switch-organization.dto';
import { ResendOtpDto } from './dto/resend-otp.dto';
import { LoginResponseDto, MessageResponseDto, SwitchOrganizationResponseDto } from './dto/responses.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Register a new owner' })
  @ApiResponse({ status: 201, description: 'User successfully created. OTP sent.', type: MessageResponseDto })
  @ApiResponse({ status: 409, description: 'Email already exists' })
  async signup(@Body() dto: SignupDto): Promise<MessageResponseDto> {
    return this.authService.signup(dto);
  }

  @Post('verify-email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Verify email with OTP' })
  @ApiResponse({ status: 200, description: 'Email successfully verified.', type: MessageResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid or expired OTP.' })
  @ApiResponse({ status: 429, description: 'Too many attempts. Rate limit exceeded.' })
  async verifyEmail(@Body() dto: VerifyOtpDto): Promise<MessageResponseDto> {
    return this.authService.verifyEmail(dto);
  }

  @Post('resend-verification-otp')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Resend email verification OTP' })
  @ApiResponse({ status: 200, description: 'If the email is registered, a new OTP has been sent.', type: MessageResponseDto })
  @ApiResponse({ status: 429, description: 'Too many attempts. Rate limit exceeded.' })
  async resendVerificationOtp(@Body() dto: ResendOtpDto): Promise<MessageResponseDto> {
    return this.authService.resendVerificationOtp(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login with email and password' })
  @ApiResponse({ status: 200, description: 'Logged in successfully. Returns JWT token.', type: LoginResponseDto })
  @ApiResponse({ status: 401, description: 'Invalid credentials or unverified email.' })
  async login(@Body() dto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.login(dto);
  }

  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Request a password reset OTP' })
  @ApiResponse({ status: 200, description: 'If the email exists, a reset code has been sent.', type: MessageResponseDto })
  async forgotPassword(@Body() dto: ForgotPasswordDto): Promise<MessageResponseDto> {
    return this.authService.forgotPassword(dto);
  }

  @Post('change-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Change password using a reset OTP' })
  @ApiResponse({ status: 200, description: 'Password successfully changed.', type: MessageResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid or expired reset code.' })
  @ApiResponse({ status: 429, description: 'Too many attempts. Rate limit exceeded.' })
  async changePassword(@Body() dto: ChangePasswordDto): Promise<MessageResponseDto> {
    return this.authService.changePassword(dto);
  }

  @Patch('switch-organization')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Switch active organization (requires auth)' })
  @ApiResponse({ status: 200, description: 'Switched organization successfully. Returns new JWT token.', type: SwitchOrganizationResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async switchOrganization(
    @Body() dto: SwitchOrganizationDto,
    @CurrentUser() user: any
  ): Promise<SwitchOrganizationResponseDto> {
    return this.authService.switchOrganization(user.id || user.sub, dto.organizationId);
  }
}
