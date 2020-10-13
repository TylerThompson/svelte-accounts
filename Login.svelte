<script>
    import { Accounts } from "meteor/accounts-base";
    import { Meteor } from "meteor/meteor";
    import { error } from "./state";
    export let heading = "Login";
    export let emailLabel = undefined;
    export let emailPlaceholder = "Email";
    export let passwordPlaceholder = "Password";
    export let passwordLabel = undefined;
    export let text = "Login";
    let email = "";
    let password = "";
    function onSubmit() {
        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                isSent = true;
                email = "";
                return;
            }
            error.set(err.reason);
        });
    }
</script>

{#if typeof heading !== undefined}
    <h3>{heading}</h3>
{/if}

<form on:submit|preventDefault={onSubmit}>
    <div>
        <label>
            {#if typeof emailLabel !== undefined}{emailLabel}{/if}
            <input
                placeholder={emailPlaceholder}
                type="email"
                bind:value={email} />
        </label>
    </div>
    <div>
        <label>
            {#if typeof passwordLabel !== undefined}{passwordLabel}{/if}
            <input
                placeholder={passwordPlaceholder}
                type="password"
                bind:value={password} />
        </label>
    </div>
    <button>{text}</button>
</form>
