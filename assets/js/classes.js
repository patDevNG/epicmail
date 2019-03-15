class Login {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
class Register {
    constructor(firstName, lastName, country, email, phoneNumber, gender, password, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
    }
}
class Message {
    constructor(messageId, message, subject, status, parentMessageId) {
        this.messageId = messageId;
        this.message = message;
        this.subject = subject;
        this.status = status;
        this.parentMessageId = parentMessageId;
    }
}
class Inbox {
    constructor(senderId, receiverId, messageId) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.messageId = messageId;
    }
}
class SentMessage {
    constructor(senderId, receiverId, messageId) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.messageId = messageId;
    }
}