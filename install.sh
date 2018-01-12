virtualenv env_deck
source env_deck/bin/activate
pip install -r requirements.txt
bower install --allow-root
./manage.py migrate
./manage.py collectstatic --no-input
./manage.py runserver 7001
