# tylerthompson:svelte-accounts

> This is a work in progress. it's totally usable, but I'm publishing to allow for community involvement and to get feedback

> Currently email & password is the only supported means of logging in.

## Basic

```js
<script>
import { LoginWindow } from 'meteor/tylerthompson:svelte-accounts'
</script>

<LoginWindow />
```

## You can also

```js
<script>
import { Login, Signup, Logout } from 'meteor/tylerthompson:svelte-accounts'
</script>

<Signup heading="Create an account" />
<Login />
<Logout />
```

## Components

### LoginWindow

Easy UI for Logins

| Prop          | Type   | Default   | Description |
| ------------- | ------ | --------- | ----------- |
| loginHeading | string | "Login" |             |
| signupHeading | string | "Sign Up" |             |
| loginEmailLabel  | string |  undefined  |             |
| loginEmailPlaceholder  | string | "Email"   |             |
| loginPasswordLabel  | string | undefined   |             |
| loginPasswordPlaceholder  | string | "Password"   |             |
| LoginButtonText  | string | "Login"   |             |
| signUpEmailLabel  | string | undefined   |             |
| signUpEmailPlaceholder  | string | "Email"   |             |
| signUpPasswordLabel  | string | undefined   |             |
| signUpPasswordPlaceholder  | string | "Password"   |             |
| signUpButtonText  | string | "Sign up"   |             |

### Login

Login Form

| Prop    | Type   | Default | Description |
| ------- | ------ | ------- | ----------- |
| heading | string | "Login" |             |
| emailLabel | string | undefined |             |
| emailPlaceholder | string | "Email" |             |
| passwordPlaceholder | string | "Password" |             |
| passwordLabel | string | undefined |             |
| text | string | "Login" |             |

### Signup

Sign Up Form

| Prop          | Type   | Default   | Description |
| ------------- | ------ | --------- | ----------- |
| signupHeading | string | "Sign Up" |             |
| emailLabel | string | "Email" |             |
| emailPlaceholder | string | undefined |             |
| passwordPlaceholder | string | "Password" |             |
| passwordLabel | string | undefined |             |
| text | string | "Sign Up" |             |

### Logout

A button that logs the user out

| Prop | Type   | Default  | Description |
| ---- | ------ | -------- | ----------- |
| text | string | "Logout" |             |

### Todo
#### Somethings to work on still

- Reset Password
- Forgot Password Link
- Config options
- Default window view
- Style Wrapper Component
- Text as props
- Oauth Services
- More customization