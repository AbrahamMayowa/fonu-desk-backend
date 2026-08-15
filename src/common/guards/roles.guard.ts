import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { ROLES } from '../constants/roles.constant';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // No roles required
    }

    const { user } = context.switchToHttp().getRequest();

    if (!user) {
      return false; // User not authenticated (should be caught by middleware first, but just in case)
    }

    // Assuming the user object in the request contains a list of roles they have
    // or 'isOwner' flag for the OWNER role.
    if (requiredRoles.includes(ROLES.OWNER) && user.isOwner) {
      return true;
    }

    // For other roles, assume they are included in user.roles (which we'll inject via JWT)
    if (user.roles) {
       return requiredRoles.some((role) => user.roles.includes(role));
    }

    return false;
  }
}
