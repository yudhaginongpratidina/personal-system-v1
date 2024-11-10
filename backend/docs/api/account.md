# API ACCOUNT

## POST `/register`

```json
{
    "username": ".....",
    "email": ".....",
    "password": ".....",
    "confirmPassword": ".....",
    "role": "....."
}
```

- `409`: Username already exists | Email already exists
- `400`: Password not match
- `201`: Created