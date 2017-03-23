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

Once deployed, you can start sending emails by making `GET` requests in this format:
```
https://my-now-emails-api.now.sh/?to=bob@site.com&subject=i miss you bob&html=%3Cb%3Ehi%20bob%3C/b%3E
```

Optionally, you can use `text` instead of, or in conjunction with `html`:
```
https://my-now-emails-api.now.sh/?to=tsnyder@mosscorps.com&subject=bob&text=hi%20%bob
```

You can also define a `from` address like `from="Moose" <mydog@mysite.com>`. Keep in mind, Gmail does not allow you to overwrite the sender adress. It will however pick up the display name, in this case `"Moose"`.