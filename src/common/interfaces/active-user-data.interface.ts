export type ActiveUserData =  {
  /**
   * The subject of the token (User ID)
   */
  id: string;

  /**
   * User's email address
   */
  email: string;

  /**
   * Array of roles the user holds
   */
  roles: string[];

  /**
   * Indicates if the user is a super owner
   */
  isOwner: boolean;

  /**
   * The ID of the currently active organization for this session
   */
  organizationId: string;
}
