document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // フォームのデフォルト動作を防止

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsername = "toto_moderator_1625"; // 正しいユーザーID
    const validPassword = "sutekinaserverdesune1414"; // 正しいパスワード

    if (username === validUsername && password === validPassword) {
        window.location.href = "https://sites.google.com/view/moderator51424049205jssjfj7bde"; // リダイレクトするURL
    } else {
        document.getElementById("error").textContent = "ユーザーIDまたはパスワードが間違っています。";
    }
});
