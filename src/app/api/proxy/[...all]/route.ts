import { NextRequest } from 'next/server';
import { route } from 'shared/api/session/proxy';

export async function GET(req: NextRequest, ctx: { params: { path: string[] } }): Promise<Response> {
  return route(req, ctx.params.path);
}

export async function POST(req: NextRequest, ctx: { params: { path: string[] } }): Promise<Response> {
  return route(req, ctx.params.path);
}

export async function PUT(req: NextRequest, ctx: { params: { path: string[] } }): Promise<Response> {
  return route(req, ctx.params.path);
}

export async function PATCH(req: NextRequest, ctx: { params: { path: string[] } }): Promise<Response> {
  return route(req, ctx.params.path);
}

export async function DELETE(req: NextRequest, ctx: { params: { path: string[] } }): Promise<Response> {
  return route(req, ctx.params.path);
}
