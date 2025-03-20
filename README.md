To get the Azure AD credentials:

1. Go to Azure Portal ( https://portal.azure.com/ )
2. Navigate to "Azure Active Directory" → "App registrations"
3. Click "New registration"
4. Fill in:
   - Name: Your app name (e.g., "Contact Form App")
   - Supported account types: "Accounts in this organizational directory only"
   - Redirect URI: (Leave blank for now)
5. Click "Register"
6. You'll get:
   - Application (client) ID → This is your AZURE_AD_CLIENT_ID
   - Directory (tenant) ID → This is your AZURE_AD_TENANT_ID
7. To get the client secret:
   - Go to "Certificates & secrets"
   - Click "New client secret"
   - Add description and expiry
   - Copy the generated Value → This is your AZURE_AD_CLIENT_SECRET