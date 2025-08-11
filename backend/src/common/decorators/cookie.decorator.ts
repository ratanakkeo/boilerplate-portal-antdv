import type { ExecutionContext } from '@nestjs/common'
import type { FastifyRequest } from 'fastify'
import { createParamDecorator } from '@nestjs/common'
// Bring in Fastify cookie plugin type augmentation (types only)
import '@fastify/cookie'

export const Cookies = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<FastifyRequest>()
  return data ? request.cookies?.[data] : request.cookies
})
