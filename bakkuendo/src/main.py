#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from aiohttp import web


async def index(request):
  return {}


if __name__ == '__main__':
  app = web.Application()
  app.router.add_get('/', index)
  web.run_app(app)
