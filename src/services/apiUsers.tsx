import { getAuth, createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, updateProfile,
         updateEmail, sendEmailVerification,
         updatePassword, sendPasswordResetEmail,
         User, signOut,
         Auth
        } from "firebase/auth"

export class apiUsers {
    private auth : Auth
    constructor(){
        this.auth = getAuth()
    }
    // Create user
    public createUser(email: string, password: string ): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            createUserWithEmailAndPassword(this.auth, email, password)
            .then((_userCredential) => {
                resolve(true) // CORRECT
            })
            .catch((_error) => {
                reject(false) // ERROR
            });
        })
    } 
    // Send email verification
    public sendUserEmailVerification (): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            //auth.useDeviceLanguage();
            if(this.auth.currentUser){
                sendEmailVerification(this.auth.currentUser)
                .then(() => {
                    // Email verification sent!
                    resolve(true)
                }).catch((_error) => {
                    reject(false)
                });
            } else { reject(false) /** User no logged */ }
        });

    }
    // Sigin user
    public sigInUser (email: string, password: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            signInWithEmailAndPassword(this.auth, email, password)
            .then((_userCredential) => {
                resolve(true) // CORRECT
            })
            .catch((_error) => {
                reject(false) // ERROR
            });
        })
        
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
    public updateUser (name: string, photo: string): Promise<boolean>{
        return new Promise<boolean>((resolve, reject) => {
            if(this.auth.currentUser){
                updateProfile(this.auth.currentUser, {
                displayName: name, photoURL: photo
                }).then(() => {
                    // Profile updated!
                    resolve(true) // CORRECT
                }).catch((_error) => {
                    reject(false) // ERROR
                })
            } else { reject(false) /** User no logged */ }
        })
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
    public sendEmailChangePassword (email: string): Promise<boolean> {
        return new Promise<boolean> ((resolve, reject) => {
        sendPasswordResetEmail(this.auth, email)
        .then(() => {
            // Password reset email sent!
            resolve(true)
        })
        .catch((_error) => {
            // error to send email
           reject(false)
        });
    })
    }
    public isLoged (){
        if(this.auth.currentUser) {
            return true
        } else {
            return false
        } 
    }
}