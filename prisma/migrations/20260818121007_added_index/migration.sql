-- DropIndex
DROP INDEX "Otp_email_idx";

-- CreateIndex
CREATE INDEX "AuditLog_organizationId_createdAt_idx" ON "AuditLog"("organizationId", "createdAt");

-- CreateIndex
CREATE INDEX "AuditLog_actorId_idx" ON "AuditLog"("actorId");

-- CreateIndex
CREATE INDEX "AuditLog_entityType_entityId_idx" ON "AuditLog"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "Business_organizationId_idx" ON "Business"("organizationId");

-- CreateIndex
CREATE INDEX "Business_ownerId_idx" ON "Business"("ownerId");

-- CreateIndex
CREATE INDEX "Invitation_organizationId_createdAt_idx" ON "Invitation"("organizationId", "createdAt");

-- CreateIndex
CREATE INDEX "Invitation_email_idx" ON "Invitation"("email");

-- CreateIndex
CREATE INDEX "Invitation_roleId_idx" ON "Invitation"("roleId");

-- CreateIndex
CREATE INDEX "Invitation_businessId_idx" ON "Invitation"("businessId");

-- CreateIndex
CREATE INDEX "Notification_userId_createdAt_idx" ON "Notification"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "Notification_ticketId_idx" ON "Notification"("ticketId");

-- CreateIndex
CREATE INDEX "Organization_ownerId_idx" ON "Organization"("ownerId");

-- CreateIndex
CREATE INDEX "OrganizationMember_organizationId_deletedAt_idx" ON "OrganizationMember"("organizationId", "deletedAt");

-- CreateIndex
CREATE INDEX "OrganizationMember_roleId_idx" ON "OrganizationMember"("roleId");

-- CreateIndex
CREATE INDEX "OrganizationMember_businessId_idx" ON "OrganizationMember"("businessId");

-- CreateIndex
CREATE INDEX "Otp_email_type_idx" ON "Otp"("email", "type");

-- CreateIndex
CREATE INDEX "Ticket_organizationId_createdAt_idx" ON "Ticket"("organizationId", "createdAt");

-- CreateIndex
CREATE INDEX "Ticket_organizationId_status_idx" ON "Ticket"("organizationId", "status");

-- CreateIndex
CREATE INDEX "Ticket_createdById_idx" ON "Ticket"("createdById");

-- CreateIndex
CREATE INDEX "Ticket_assignedToId_idx" ON "Ticket"("assignedToId");

-- CreateIndex
CREATE INDEX "Ticket_businessId_idx" ON "Ticket"("businessId");

-- CreateIndex
CREATE INDEX "TicketAttachment_ticketId_idx" ON "TicketAttachment"("ticketId");

-- CreateIndex
CREATE INDEX "TicketAttachment_uploadedById_idx" ON "TicketAttachment"("uploadedById");

-- CreateIndex
CREATE INDEX "TicketComment_ticketId_createdAt_idx" ON "TicketComment"("ticketId", "createdAt");

-- CreateIndex
CREATE INDEX "TicketComment_authorId_idx" ON "TicketComment"("authorId");

-- CreateIndex
CREATE INDEX "TicketHistory_ticketId_createdAt_idx" ON "TicketHistory"("ticketId", "createdAt");

-- CreateIndex
CREATE INDEX "TicketHistory_changedById_idx" ON "TicketHistory"("changedById");

-- CreateIndex
CREATE INDEX "TicketMute_ticketId_idx" ON "TicketMute"("ticketId");

-- CreateIndex
CREATE INDEX "User_ownerId_idx" ON "User"("ownerId");

-- CreateIndex
CREATE INDEX "User_defaultOrganizationId_idx" ON "User"("defaultOrganizationId");
