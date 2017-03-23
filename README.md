# Now Emails
Instantly deploy an email sending API to ZEIT Now

## Usage

```
now -e SENDER_EMAIL=email@gmail.com SENDER_PASSWORD=supersecret tylersnyder/now-emails
```

By default, the API will use `Gmail` as the service provider. To use a different provider, specify a `SERVICE` as well:

```
now -e SERVICE= SENDER_EMAIL=email@gmail.com SENDER_PASSWORD=supersecret tylersnyder/now-emails
```

To learn more about supported service providers, read more at [nodemailer.com](https://nodemailer.com/smtp/well-known/)