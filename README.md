# Now Emails
Instantly deploy an email sending API to ZEIT Now

## Deployment

```
now -e SENDER_EMAIL=email@gmail.com SENDER_PASSWORD=supersecret tylersnyder/now-emails
```

By default, the API will use `Gmail` as the service provider. To use a different provider, specify a `SERVICE` as well:

```
now -e SERVICE=Hotmail SENDER_EMAIL=email@gmail.com SENDER_PASSWORD=supersecret tylersnyder/now-emails
```

To learn more about supported service providers, read more at [nodemailer.com](https://nodemailer.com/smtp/well-known/)

## Usage

Once deployed, you can start sending emails by making `GET` requests in this format:
```
https://my-now-emails-api.now.sh/?to=bob@site.com&subject=i%20%miss%20%you%20%bob&html=<b>hi%20%bob</b>
```

Optionally, you can use `text` instead of, or together with `html`:
```
https://my-now-emails-api.now.sh/?to=tsnyder@mosscorps.com&subject=i%20%miss%20%you bob&text=hi%20%bob
```

You can also define a `from` address such as:
```
https://my-now-emails-api.now.sh/?to=bob@site.com&from=Moose%20%<mydog@mysite.com>&subject=i%20%miss%20%you%20%bob&html=<b>hi%20%bob</b>
```

Keep in mind, Gmail does not allow you to overwrite the sender adress. It will however pick up the display name, in this case `Moose`.