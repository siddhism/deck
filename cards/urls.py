from django.conf.urls import url
from django.contrib.auth.decorators import login_required

from .views import Home

urlpatterns = [
    url(r'^$', login_required(Home.as_view()), name='home'),
]
