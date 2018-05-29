# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2018-05-28 08:53
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('deploy', '0018_remove_deployinfo_project'),
    ]

    operations = [
        migrations.AddField(
            model_name='deployinfo',
            name='project',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='deploy.ProjectInfo'),
            preserve_default=False,
        ),
    ]