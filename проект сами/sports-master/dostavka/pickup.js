function selectShop(shop) {
    sessionStorage.setItem("shop", shop);
    window.location.href = "http://127.0.0.1:3002/dostavka/index1.html?vscode-livepreview=true";
}