# Deck

### Project Description 
Deck of Cards: a web app for people with OCD.

A User logs into the app. On the page, you display the 52 cards in a standard playing cards deck ‘scattered’ on the screen. 

At the bottom of the screen, have four ‘card holders’ - each labeled after a house of cards - spade, diamond, clubs, hearts. 

The user can ‘clean up’ the space by dragging a card and dropping it into the right card holder.

The cards must get arranged automatically when a card is dropped into right card holder. 

Notes:
You can only place a card in the correct cardholder. Spades in spades, hearts in hearts, etc.
Cards must get arranged automatically when a card is dropped into right card holder.
If all cards are put into the right cardholder, show a “restart” button. If clicked, the cards should be again shuffled in the space above.
If user logs out, save the progress they made. On second login, game should start from where they left off.

## Setting up project and initializing data
Make sure you have python-setuptools, virtualenv, pip & bower installed. 

After that run install.sh form the repository.
```
./install.sh
```
Or setup manually

```
# create a virtualenv 
virtualenv env_deck
source env_deck/bin/activate
pip install -r reuqirements.txt
bower install --allow-root
./manage.py migrate
./manage.py collectstatic
./manage.py createsuperuser
./manage.py runserver 7001
```

check http://127.0.0.1:7001/