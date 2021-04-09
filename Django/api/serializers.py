from rest_framework import serializers
from .models import Movie, Actor


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = ['id', 'name', 'age', 'birth_place']


class MovieSerializer(serializers.ModelSerializer):
    actors = ActorSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = ['id', 'title', 'desc', 'release_date','upvotes', 'actors']
        extra_kwargs = {'authors': {'required': False}}


class MovieMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ['id', 'title', 'desc', 'release_date', 'upvotes']
 
