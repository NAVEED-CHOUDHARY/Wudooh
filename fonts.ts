document.addEventListener("DOMContentLoaded", () => {

    setTimeout(function () {
        let wudooh = false;
        const metas = document.head.getElementsByTagName("meta");

        for (let i = 0; i < metas.length; i++) {
            if (metas.item(i).getAttribute("wudooh") === "true") {
                wudooh = true;
                break;
            }
        }
        if (wudooh) {
            // @ts-ignore
            document.querySelector('#snackbar').MaterialSnackbar.showSnackbar({
                message: "Wudooh extension is on, fonts will not show correctly, please turn it off and reload the page",
                timeout: 9999999999,
                actionText: "Reload",
                actionHandler: function () {
                    document.location.reload();
                }
            })
        }
    }, 1000);
});