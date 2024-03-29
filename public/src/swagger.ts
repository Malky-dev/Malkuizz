/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/session/{token}": {
    /** look for session token */
    get: {
      parameters: {
        path: {
          token: components["schemas"]["Token"];
        };
      };
      responses: {
        /** token found */
        200: {
          content: {
            "application/json": components["schemas"]["User"];
          };
        };
        /** token not found */
        404: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** login by token failed */
        default: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
  };
  "/api/login": {
    /** login */
    post: {
      responses: {
        /** login sucessfull */
        200: {
          content: {
            "application/json": components["schemas"]["Token"];
          };
        };
        /** login failed */
        default: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
      /** Login data */
      requestBody: {
        content: {
          "application/json": {
            email: components["schemas"]["Email"];
            password: components["schemas"]["Password"];
          };
        };
      };
    };
    /** logout */
    delete: {
      responses: {
        /** logout sucessfull */
        204: {
          content: {
            "application/json": string;
          };
        };
        /** logout failed */
        default: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
  };
  "/api/signin": {
    /** sign in */
    put: {
      responses: {
        /** sign in sucessfull */
        201: {
          content: {
            "application/json": string;
          };
        };
        /** signin failed */
        default: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
      /** sign in data */
      requestBody: {
        content: {
          "application/json": {
            email: components["schemas"]["Email"];
            nickname: string;
            password: components["schemas"]["Password"];
          };
        };
      };
    };
    /** signout */
    delete: {
      responses: {
        /** signout sucessfull */
        204: {
          content: {
            "application/json": string;
          };
        };
        /** signout failed */
        default: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
  };
  "/api/question/{id}": {
    /** get question */
    get: {
      parameters: {
        path: {
          id: components["schemas"]["QuestionID"];
        };
      };
      responses: {
        /** question found */
        200: {
          content: {
            "application/json": components["schemas"]["Question"];
          };
        };
        /** question not found */
        404: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** question error */
        default: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
    /** edit a question */
    post: {
      parameters: {
        path: {
          id: components["schemas"]["QuestionID"];
        };
      };
      responses: {
        /** question successfully edited */
        200: {
          content: {
            "application/json": string;
          };
        };
        /** question not found */
        404: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** question not edited */
        default: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
      /** edit a question request body */
      requestBody: {
        content: {
          "application/json": components["schemas"]["Question"];
        };
      };
    };
    /** delete question */
    delete: {
      parameters: {
        path: {
          id: components["schemas"]["QuestionID"];
        };
      };
      responses: {
        /** question deletion sucessfull */
        204: {
          content: {
            "application/json": string;
          };
        };
        /** question not found */
        404: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** question deletion failed */
        default: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
  };
  "/api/questions": {
    /** question */
    get: {
      responses: {
        /** question found */
        200: {
          content: {
            "application/json": components["schemas"]["Question"][];
          };
        };
        /** question request failed */
        default: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
    /** add question */
    put: {
      responses: {
        /** add question sucessfull */
        201: {
          content: {
            "application/json": string;
          };
        };
        /** add question failed */
        default: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
      /** add question request body */
      requestBody: {
        content: {
          "application/json": components["schemas"]["QuestionCreation"];
        };
      };
    };
  };
}

export interface components {
  schemas: {
    Token: string;
    User: {
      nickname: string;
      /** @enum {string} */
      role: "admin" | "moderator" | "basic";
      isVerified: boolean;
    };
    Error: {
      code: string;
      error: string;
    };
    /** Format: email */
    Email: string;
    /** Format: password */
    Password: string;
    QuestionID: number;
    QuestionCreation: {
      label: string;
      goodAnswer: string;
      badAnswer1: string;
      badAnswer2: string;
      badAnswer3: string;
      difficulty: number;
      categories: string[];
    };
    Question: components["schemas"]["QuestionCreation"] & {
      id: components["schemas"]["QuestionID"];
    };
  };
}

export interface operations {}

export interface external {}
