import {
  DMChannel,
  Message,
  PermissionResolvable,
  TextChannel,
} from 'discord.js'
import { client } from '~'

export const PERMISSIONS: PermissionResolvable[] = [
  'SEND_MESSAGES',
  'READ_MESSAGE_HISTORY',
]

export const invite = async (_: Message, channel: TextChannel | DMChannel) => {
  void channel.startTyping()

  try {
    const inviteURL = await client.generateInvite({ permissions: PERMISSIONS })
    await channel.send(`<${inviteURL}>`)
  } finally {
    channel.stopTyping()
  }
}
