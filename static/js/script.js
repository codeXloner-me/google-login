function handleCredentialResponse(response) {
      try {
        const base64Url = response.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );
        const user = JSON.parse(jsonPayload);
        console.log("User logged in:", user);
      } catch (e) {
        console.error("Error decoding JWT", e);
      }

      window.location.href = "https://snportfolioepic.netlify.app/";
    }

    document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function (e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});
setInterval(function() {
    if (window.outerHeight - window.innerHeight > 200) {
        document.body.innerHTML = "DevTools Detected!";
    }
}, 1000);
