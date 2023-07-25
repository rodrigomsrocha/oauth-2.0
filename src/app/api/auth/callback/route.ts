import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET(request: NextRequest) {
  // get code
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')

  // get access token with the code
  const accessTokenResponse = await axios.post(
    'https://github.com/login/oauth/access_token',
    null,
    {
      params: {
        code,
        client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
      },
      headers: {
        Accept: 'application/json',
      },
    },
  )

  const { access_token } = accessTokenResponse.data

  // use access_token to get user info
  const userResponse = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  const userInfo = userResponse.data

  // handle user info

  const token = jwt.sign(
    {
      name: userInfo.name,
      avatarUrl: userInfo.avatar_url,
    },
    'shhhhh',
    {
      expiresIn: '30 days',
    },
  )

  // save token to cookie and redirect user to home
  const tokenExpiresInSeconds = 60 * 60 * 24 * 30
  const redirectUrl = new URL('/', request.url)

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${tokenExpiresInSeconds}`,
    },
  })
}
