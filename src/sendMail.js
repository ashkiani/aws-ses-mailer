const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const sesClient = new SESClient({ region: process.env.AWS_REGION });

async function sendMail(toAddress, fromAddress, emailBodyText, emailBodyHtml, subject, replyToEmail) {
    const sendEmailCommand = createSendEmailCommand(toAddress, fromAddress, emailBodyText, emailBodyHtml, subject, replyToEmail);
    result = await sesClient.send(sendEmailCommand);
    return result;
}

// Siavash: The original code is from: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_ses_code_examples.html
// I added a couple of parameters.
const createSendEmailCommand = (toAddress, fromAddress, emailBodyText, emailBodyHtml, subject, replyTo) => {
    return new SendEmailCommand({
        Destination: {
            /* required */
            CcAddresses: [
                /* more items */
            ],
            ToAddresses: [
                toAddress,
                /* more To-email addresses */
            ],
        },
        Message: {
            /* required */
            Body: {
                /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: emailBodyHtml,
                },
                Text: {
                    Charset: "UTF-8",
                    Data: emailBodyText,
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: subject,
            },
        },
        Source: fromAddress,
        ReplyToAddresses: [
            replyTo
        ],
    });
};

module.exports = {
    sendMail
};