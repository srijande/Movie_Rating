from django.db import models

# Create your models here.


class Actor(models.Model):
    name = models.CharField(max_length=256)
    age = models.IntegerField()
    birth_place = models.CharField(max_length=256)


    def __str__(self):
        return self.name
        
class Movie(models.Model):
    title = models.CharField(max_length=32)
    desc = models.CharField(max_length=256)
    release_date = models.DateTimeField()
    upvotes = models.IntegerField(default=0)
    actors = models.ManyToManyField(Actor)


    def __str__(self):
        return self.title

