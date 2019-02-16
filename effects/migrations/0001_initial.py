# Generated by Django 2.1.7 on 2019-02-16 18:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('dice', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DOTDice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num_dice', models.SmallIntegerField()),
                ('dice', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='dice.Dice')),
            ],
        ),
        migrations.CreateModel(
            name='Effect',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, unique=True)),
                ('effect_type', models.CharField(max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='DOTEffect',
            fields=[
                ('effect_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='effects.Effect')),
                ('save_dc', models.SmallIntegerField()),
                ('save_stat', models.CharField(choices=[('STR', 'Strength'), ('DEX', 'Dexterity'), ('CON', 'Constitution'), ('WIS', 'Wisdom'), ('INT', 'Intelligence'), ('CHA', 'Charisma')], max_length=16, null=True)),
                ('dice', models.ManyToManyField(through='effects.DOTDice', to='dice.Dice')),
            ],
            bases=('effects.effect',),
        ),
        migrations.CreateModel(
            name='PermanentTypeResistance',
            fields=[
                ('effect_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='effects.Effect')),
            ],
            bases=('effects.effect',),
        ),
        migrations.CreateModel(
            name='StunEffect',
            fields=[
                ('effect_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='effects.Effect')),
                ('save_dc', models.SmallIntegerField()),
                ('save_stat', models.CharField(choices=[('STR', 'Strength'), ('DEX', 'Dexterity'), ('CON', 'Constitution'), ('WIS', 'Wisdom'), ('INT', 'Intelligence'), ('CHA', 'Charisma')], max_length=16, null=True)),
            ],
            bases=('effects.effect',),
        ),
        migrations.AddField(
            model_name='dotdice',
            name='effect',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='effects.DOTEffect'),
        ),
    ]
