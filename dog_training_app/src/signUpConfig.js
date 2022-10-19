const signUpConfig = {
    header: "Custom Signup",
    hideAllDefaults: true,
    Analytics: {
        disabled: true
    },
    signupFields: [
        {
            label: "Full Name",
            key: "name",
            required: true,
            displayOrder: 1,
            type: "string"
        },
        {
            label: "Email",
            key: "email",
            required: true,
            displayOrder: 2,
            type: "string"
        },
        {
            label: "Password",
            key: "password",
            required: true,
            displayOrder: 3,
            type: "string"
        }
    ]

}

export default signUpConfig;