<p align="center">
   <img alt="Logo" width="100" src="https://i.imgur.com/K6dqaNk.png">
</p>

<p align="center">
    <img src="https://todo.martinsz.lv/img/mit.svg" alt="License">
    <img src="https://myclientsapp.martinsz.lv/api/project-age.svg" alt="Project age">
</p>

<h2 align="center">myClients</h2>

An online appointment scheduling app.

### Build instructions

````
# (!) Remove node_modules, vendor and public/storage before building
# Also, make sure to stop and remove all containers before running them anew.

$ git clone https://github.com/martinszeltins/myClients
$ cd myClients
$ docker-compose up -d
$ docker-compose logs (after the previous command has finished)
````

The website will be running at [http://localhost:6455/](http://localhost:6455/)<br>
The app will be running at [http://localhost:47344/](http://localhost:47344/)

![Screenshot 1](https://www.martinsz.lv/images/myclients1.jpg "Screenshot 1")

![Screenshot 2](https://www.martinsz.lv/images/myclients2.jpg "Screenshot 2")

### 📑 License

[MIT](http://opensource.org/licenses/MIT)