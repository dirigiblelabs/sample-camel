export function onMessage(message) {
    const messageBody = message.getBodyAsString();
    const modifiedMessageBody = `${messageBody} -> handler.mjs handled this message`;
    message.setBody(modifiedMessageBody);
    return message;
}