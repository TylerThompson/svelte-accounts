<script>
    // import { Accounts } from "meteor/accounts-base";
    import { error } from "./state";
    // Props
    export let heading = "Login";
    export let emailLabel = undefined;
    export let emailPlaceholder = "Email";
    export let passwordPlaceholder = "Password";
    export let passwordLabel = undefined;
    export let text = "Sign up";
    // State
    let email = "";
    let password = "";
    // Actions
    function onSubmit() {
        Accounts.createUser(
            {
                password,
                email,
            },
            (err) => {
                if (!err) {
                    isSent = true;
                    email = "";
                    return;
                }
                error.set(err.reason);
            }
        );
    }
</script>

{#if typeof heading !== 'undefined'}
    <h3>{heading}</h3>
{/if}

<form on:submit|preventDefault={onSubmit}>
    <div>
        <label>
            {emailLabel}
            <input
                placeholder={emailPlaceholder}
                type="email"
                bind:value={email} />
        </label>
    </div>
    <div>
        <label>
            {passwordLabel}
            <input
                placeholder={passwordPlaceholder}
                type="password"
                bind:value={password} />
        </label>
    </div>
    <button>{text}</button>
</form>
