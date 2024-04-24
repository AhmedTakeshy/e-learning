
type ServerResponse<T> =
    { successMessage: string, data: T; status: "Success"; statusCode: number } |
    { errorMessage: string; status: "Error"; statusCode: number };


type ContactForm = {
    fullName: string;
    email: string;
    subject: string;
    message: string;
};


