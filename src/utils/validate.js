const checkValid = (email, password) =>
{
    // Removed the extra ^ at the end of the regex
    const emailValid = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);
    // Password requires: 8+ chars, 1 Uppercase, 1 Lowercase, 1 Number, 1 Special Char
    const passwordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if (!emailValid) return 'Email ID is not valid...';
    if (!passwordValid) return 'Password is not valid...';
    return null; // Both are valid
};
export default checkValid;