import { getAuth, createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, updateProfile,
         updateEmail, sendEmailVerification,
         updatePassword, sendPasswordResetEmail,
         User, signOut,
         Auth
        } from "firebase/auth"

class apiUsers {
    private auth : Auth
    constructor(){
        this.auth = getAuth()
    }
    // Create user
    public createUser(email: string, password: string ) {
        createUserWithEmailAndPassword(this.auth, email, password)
        .then((_userCredential) => {
            return true // CORRECT
        })
        .catch((_error) => {
            return false // ERROR
        });
    } 
    // Send email verification
    public sendUserEmailVerification () {
        //auth.useDeviceLanguage();
        if(this.auth.currentUser){
            sendEmailVerification(this.auth.currentUser)
            .then(() => {
                // Email verification sent!
                return true
            });
        } else { return false /** User no logged */ }
    }
    // Sigin user
    public sigInUser (email: string, password: string) {
        signInWithEmailAndPassword(this.auth, email, password)
        .then((_userCredential) => {
            return true // CORRECT
        })
        .catch((_error) => {
            return false // ERROR
        });
    } 
    // Sign out
    public signOut () {
        signOut(this.auth).then(() => {
            // Sign-out successful.
            return true
        }).catch((_error) => {
            // An error happened.
            return false
        });
    }
    // Update profile --- NAME and PHOTO
    public updateUser (name: string, photo: string){
        if(this.auth.currentUser){
            updateProfile(this.auth.currentUser, {
            displayName: name, photoURL: photo
            }).then(() => {
                // Profile updated!
                return true // CORRECT
            }).catch((_error) => {
                return false // ERROR
            })
        } else { return false /** User no logged */ }
    }
    // Change email
    public changeUserEmail () {
        if(this.auth.currentUser){
            updateEmail(this.auth.currentUser, "user@example.com").then(() => {
                // Email updated!
                return true // CORRECT
            }).catch((_error) => {
                return false // ERROR
            });
        } else { return false /** User no logged */ }
    }
    // Change password
    public changePassword (user: User, newPassword: string) {
        updatePassword(user, newPassword).then(() => {
            // Update successful.
            return true
            }).catch((_error) => {
            // An error ocurred
            return false
            });
    }
    // Send email to change password
    public sendEmailChangePassord (email: string) {
        sendPasswordResetEmail(this.auth, email)
        .then(() => {
            // Password reset email sent!
            return true
        })
        .catch((_error) => {
            // error to send email
            return false
        });
    }
}

export default apiUsers