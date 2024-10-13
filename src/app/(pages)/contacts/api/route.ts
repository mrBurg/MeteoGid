import { NextResponse } from 'next/server';

export async function POST(/* req: Request, res: Response */) {
  return NextResponse.json({
    status: 200,
    data: {
      title: 'Контакти',
      contacts: [
        {
          name: 'Tsytok Ruslan',
          email: 'tsrusp@gmail.com',
        },
        {
          name: 'Burhonov Fedir',
          email: 'fed-@ukr.net',
        },
      ],
    },
  });
}
