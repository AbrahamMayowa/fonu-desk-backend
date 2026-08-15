import { ApiProperty } from '@nestjs/swagger';

export class AuthUserResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  isOwner: boolean;

  @ApiProperty({ nullable: true, type: String })
  defaultOrganizationId: string | null;
}

export class LoginResponseDto {
  @ApiProperty()
  accessToken: string;

  @ApiProperty({ type: AuthUserResponseDto })
  user: AuthUserResponseDto;
}

export class SwitchOrganizationResponseDto {
  @ApiProperty()
  accessToken: string;
}

export class MessageResponseDto {
  @ApiProperty()
  message: string;
}
