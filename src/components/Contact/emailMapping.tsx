type EmailMapping = {
    [key: string]: {
      [key: string]: string;
    };
  };
  
  export const emailMapping: EmailMapping = {
    "Philadelphia": {
      "Services": "email1@example.com",
      "Employment": "email2@example.com",
      "Something else": "email3@example.com"
    },
    "Montgomery, Bucks, or Delaware county": {
      "Services": "email4@example.com",
      "Employment": "email5@example.com",
      "Something else": "email6@example.com"
    }
  };
  
  export const getRecipientEmail = (location: string, job: string): string => {
    return emailMapping[location]?.[job] || "default@example.com";
  };