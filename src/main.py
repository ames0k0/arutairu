#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from aiohttp import web


async def index(request):
  return web.Response(text='Hello World!')


app = web.Application()
app.router.add_get('/', index)
web.run_app(app)
