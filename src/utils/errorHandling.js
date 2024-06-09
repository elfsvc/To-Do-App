export const errorMessages = (errorCode) => {
    switch (errorCode) {
        case 'auth/user-not-found':
            return {
                statusCode: true,
                message: "Kullanıcı bulunamadı"
            };

        case 'auth/invalid-credential':
            return {
                statusCode: true,
                message: "Hatalı şifre veya eposta adresi"
            };

        case 'auth/invalid-email':
            return {
                statusCode: true,
                message: "Geçersiz eposta adresi"
            };

        case 'auth/email-already-in-use':
            return {
                statusCode: true,
                message: "Eposta adresi zaten kullanımda"
            };

            default:
                return errorCode;
    }
   
}