from django.db import models

from random import randint


class Dice(models.Model):
    num_sides = models.PositiveSmallIntegerField(unique=True)

    def roll(self):
        return randint(1, self.num_sides)
