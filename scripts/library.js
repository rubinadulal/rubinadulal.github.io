const movieJSON = `
        [


            {
                "title": "Frozen",
                "image": "../images/frozen.jpeg",
                "genre": "Comedy, Adventure, Kids, Animation, Fantasy, Arts, Entertainment, and Culture",
                "casts": ["Kristen Bell", "Idina Menzel", "Josh Gad", "Jonathan Groff"],
                "price": 19.99
            },

            {
                "title": "Frozen II",
                "image": "../images/frozen2.jpeg",
                "genre": "Kids, Animation, Adventure, Comedy, Drama, Fantasy, Arts, Entertainment, and Culture",
                "casts": ["Kristen Bell", "Idina Menzel", "Josh Gad", "Jonathan Groff"],
                "price": 19.99
            },

            {
                "title": "Raya And The Last Dragon",
                "image": "../images/raya.jpeg",
                "genre": "Action, Adventure, Animation, Kids, Comedy, Drama, Fantasy",
                "casts": ["Kelly Marie Tran", "Awkwafina", "Gemma Chan", "Daniel Dae Kim"],
                "price": 19.99
            },

            {
                "title": "Moana",
                "image": "../images/moana.jpg",
                "genre": "Kids, Animation, Adventure, Comedy, Fantasy, Arts, Entertainment, and Culture",
                "casts": ["Auli'i Cravalho", "Dwayne Johnson", "Rachel House", "Temuera Morrison"],
                "price": 19.99
            },
            {
                "title": "Moana 2",
                "image": "../images/moana2.jpg",
                "genre": "Adventure, Comedy, Fantasy, Arts, Entertainment, and Culture, Animation, Kids",
                "casts": ["Auli'i Cravalho", "Dwayne Johnson", "Rachel House", "Temuera Morrison"],
                "price": 14.99
            }

        ]
        `;

        class Movie {

            #price;

            constructor(title, genre, image, casts, price = 0) {
                this.title = title;
                this.image = image;
                this.genre = genre;
                this.casts = casts;
                this.#price = price;
            }

            toString() {
                return `${this.title} (${this.genre})`;
            }

            get price() {
                return this.#price;
            }

            set price(value) {
                if (value < 0) {
                    this.#price = 0;
                }
                else {
                    this.#price = value;
                }
            }

            createHTMLElement() {
                const holder = document.createElement('div');
                holder.classList.add('movie_list');
            
                const img = document.createElement('img');
                img.src = this.image;
                img.alt = this.title;
                img.style.width = '200px';
                img.style.height = '300px';
                holder.appendChild(img);
            
                const title_up = document.createElement('h3');
                title_up.textContent = this.title;
                holder.appendChild(title_up);
            
                const genre_up = document.createElement('p');
                genre_up.textContent = `Genre: ${this.genre}`;
                holder.appendChild(genre_up);

                const cast_up = document.createElement('p');
                cast_up.textContent = `Casts: ${this.casts.join(', ')}`;
                holder.appendChild(cast_up);
                
                const price_up = document.createElement('p');
                price_up.textContent = `Price: $${this.price.toFixed(2)}`;
                holder.appendChild(price_up);
            
                return holder;
            }
        }
 
        document.addEventListener('DOMContentLoaded', () => {
            const movies_array = JSON.parse(movieJSON);
            const movies_container = document.getElementById('disneyMovie');

            movies_array.forEach(data_movies => {
                const moviee = new Movie(data_movies.title, data_movies.genre, data_movies.image, data_movies.casts, data_movies.price);
                const moviesss = moviee.createHTMLElement();
                movies_container.appendChild(moviesss);
            });
        });



        function darktheme(){
            document.getElementById('bodyy').classList.remove('lighttheme');
            document.getElementById('bodyy').classList.add('darktheme');
            document.getElementById('current_theme').innerHTML="Current Theme: Dark";
        }
        function lighttheme(){
            document.getElementById('bodyy').classList.remove('darktheme');
            document.getElementById('bodyy').classList.add('lighttheme');
            document.getElementById('current_theme').innerHTML="Current Theme: Light";
        }
        function defaulttheme(){
            document.getElementById('bodyy').classList.remove('lighttheme');
            document.getElementById('bodyy').classList.remove('darktheme');
            document.getElementById('current_theme').innerHTML="Current Theme: Default";
        }