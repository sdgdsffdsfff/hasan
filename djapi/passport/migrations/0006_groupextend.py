# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2018-03-20 05:17
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0007_alter_validators_add_error_messages'),
        ('passport', '0005_auto_20180320_1132'),
    ]

    operations = [
        migrations.CreateModel(
            name='GroupExtend',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('be_app', models.CharField(default='', max_length=125, null=True)),
                ('desc', models.CharField(default='', max_length=125, null=True)),
                ('is_del', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('group', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='auth.Group')),
            ],
        ),
    ]
