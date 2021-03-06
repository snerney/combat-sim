# Generated by Django 2.1.7 on 2019-03-18 02:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('effects', '0001_initial'),
        ('actions', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Combatant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64, unique=True)),
                ('max_hp', models.PositiveSmallIntegerField()),
                ('ac', models.PositiveSmallIntegerField()),
                ('proficiency', models.PositiveSmallIntegerField()),
                ('str_save', models.PositiveSmallIntegerField()),
                ('dex_save', models.PositiveSmallIntegerField()),
                ('con_save', models.PositiveSmallIntegerField()),
                ('wis_save', models.PositiveSmallIntegerField()),
                ('int_save', models.PositiveSmallIntegerField()),
                ('cha_save', models.PositiveSmallIntegerField()),
                ('cr', models.FloatField()),
                ('num_legendary_actions', models.SmallIntegerField(default=0)),
                ('combatant_type', models.CharField(max_length=128, null=True)),
                ('size', models.CharField(max_length=32, null=True)),
                ('speed', models.PositiveSmallIntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='CombatantAction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='actions.Action')),
                ('combatant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='actors.Combatant')),
            ],
        ),
        migrations.CreateModel(
            name='CombatantInnateEffect',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('combatant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='actors.Combatant')),
                ('effect', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='effects.Effect')),
            ],
        ),
        migrations.AddField(
            model_name='combatant',
            name='actions',
            field=models.ManyToManyField(through='actors.CombatantAction', to='actions.Action'),
        ),
        migrations.AddField(
            model_name='combatant',
            name='innate_effects',
            field=models.ManyToManyField(through='actors.CombatantInnateEffect', to='effects.Effect'),
        ),
    ]
