# wiris-test

Angular Frontend Wiris Test

# Starting the PHP server

I am using docker to start up the server. To build the docker image, navigate to the `php` folder and run

```
docker build -t some-name -f froala-wiris.docker .
```

(note the dot at the end)

I am then using Docker Desktop to start the image on port 8000.

When I use `wiriseditorsavemode = base64` the `test.php` page shows correctly, but I see this error message in the console:

> Failed to load resource: the server responded with a status of 404 (Not Found)

When I use `wiriseditorsavemode = image` (remember to rebuild the docker image), the `test.php` page shows "OK" for all status values, but I don't see the actual images and the console shows multiple errors:

> GET http://localhost:8000/core/WIRISplugins.js?viewer=image net::ERR_ABORTED 404 (Not Found)

> GET http://integration/showimage.php?formula=f9e6e3d09b914b4f674a47ae7e73be84 net::ERR_NAME_NOT_RESOLVED

> GET http://integration/showimage.php?formula=5bbea37016fffe721bd02af918a117ce net::ERR_NAME_NOT_RESOLVED

# Running the Angular project

- navigate to the `angular` folder
- run `npm i`
- run `ng serve`

For me this also currently fails with the following error:

> zone-evergreen.js:2892 POST http://localhost:4200/localhost:8000/integration/configurationjs.php 404 (Not Found)