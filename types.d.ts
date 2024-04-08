
type ServerResponse<T> =
    { successMessage: string, data: T; status: "Success"; statusCode: number } |
    { errorMessage: string; status: "Error"; statusCode: number };


type ContactForm = {
    fullName: string;
    email: string;
    subject: string;
    message: string;
};

type User = {
    id: number;
    email: string;
    password: string;
    role: "SUPERADMIN" | "ADMIN";
    createdAt: string;
    updatedAt: string;

    income: Income[];
    expense: Expense[];
    subscription: Subscription[];
};

type Income = {
    id: number
    amount: number
    source: string
    userId: number
    user: User
    createdAt: DateTime
    updatedAt: DateTime
}

type Expense = {
    id: number
    amount: number
    source: string
    userId: Int
    user: User
    createdAt: DateTime
    updatedAt: DateTime
}

type Client = {
    id: number
    fullName: string
    email: string
    phone: string
    address: string
    createdAt: DateTime
    updatedAt: DateTime

    subscription?: Subscription
}

type Subscription = {
    id: Int
    name: string
    price: Float
    subscriptionPeriod: SubscriptionPeriod
    subscribedAt: DateTime
    expiresAt: DateTime
    subscribedBy: User
    userId: Int
    subscribedTo: Client
    clientId: Int
    subscriptionStatus: SubscriptionStatus
    createdAt: DateTime
    updatedAt: DateTime
}
