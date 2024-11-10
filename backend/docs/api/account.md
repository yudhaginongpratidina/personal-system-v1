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

## POST `/login`

```json
{
    "email": ".....",
    "password": "....."
}
```

- `404`: email not found
- `401`: wrong email or password
- `200`: Login Success