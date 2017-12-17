import type { $Spread } from './types.h'


export type User = {
}

export type Chat = {
}

export type Message = {
}

export type MessageEntity = {
}

export type PhotoSize = {
}

export type Audio = {
}

export type Document = {
}

export type Video = {
}

export type Voice = {
}

export type VideoNote = {
}

export type Contact = {
}

export type Location = {
}

export type Venue = {
}

export type UserProfilePhotos = {
}

export type File = {
}

export type ReplyKeyboardMarkup = {
}

export type KeyboardButton = {
}

export type ReplyKeyboardRemove = {
}

export type InlineKeyboardMarkup = {
}

export type InlineKeyboardButton = {
}

export type CallbackQuery = {
}

export type ForceReply = {
}

export type ChatPhoto = {
}

export type ChatMember = {
}

export type ResponseParameters = {
}

export type InputMedia = {
}

export type InputMediaPhoto = {
}

export type InputMediaVideo = {
}

export type InputFile = {
}

/**
 * This object represents an incoming inline query.
 * When the user sends an empty query,
 * your bot could return some default or trending results.
 */
export type InlineQuery = {
  /** Unique identifier for this query */
  id: string,

  /** Sender */
  from: User,

  /** Sender location, only for bots that request user location */
  location?: Location,

  /** Text of the query (up to 512 characters) */
  query: string,

  /** Offset of the results to be returned, can be controlled by the bot */
  offset: string,
}

export type InlineQueryResultCachedAudio = {
}

export type InlineQueryResultCachedDocument = {
}

export type InlineQueryResultCachedGif = {
}

export type InlineQueryResultCachedMpeg4Gif = {
}

export type InlineQueryResultCachedPhoto = {
}

export type InlineQueryResultCachedSticker = {
}

export type InlineQueryResultCachedVideo = {
}

export type InlineQueryResultCachedVoice = {
}

export type InlineQueryResultArticle = {
}

export type InlineQueryResultAudio = {
}

export type InlineQueryResultContact = {
}

export type InlineQueryResultGame = {
}

export type InlineQueryResultDocument = {
}

export type InlineQueryResultGif = {
}

export type InlineQueryResultLocation = {
}

export type InlineQueryResultMpeg4Gif = {
}

export type InlineQueryResultPhoto = {
}

export type InlineQueryResultVenue = {
}

export type InlineQueryResultVideo = {
}

export type InlineQueryResultVoice = {
}

/**
 * Represents a result of an inline query
 * that was chosen by the user and sent to their chat partner.
 * @see https://core.telegram.org/bots/api#choseninlineresult
 * @see https://core.telegram.org/bots/api#inlinequeryresult
 */
export type ChosenInlineResult = {
  /** The unique identifier for the result that was chosen */
  result_id: string,

  /** The user that chose the result */
  from: User,

  /** Sender location, only for bots that require user location */
  location?: Location,

  /**
   * Identifier of the sent inline message.
   * Available only if there is an inline keyboard attached to the message.
   * Will be also received in callback queries and can be used to edit the message.
   * @see https://core.telegram.org/bots/api#inlinekeyboardmarkup
   */
  inline_message_id?: string,

  /** The query that was used to obtain the result */
  query: string,
}

/**
 * This object represents a shipping address.
 * @see https://core.telegram.org/bots/api#shippingaddress
 */
export type ShippingAddress = {
  /** ISO 3166-1 alpha-2 country code */
  country_code: string,

  /** State, if applicable */
  state: string,

  /** City */
  city: string,

  /** First line for the address */
  street_line1: string,

  /** Second line for the address */
  street_line2: string,

  /** Address post code */
  post_code: string,
}

/**
 * This object represents information about an order.
 * @see https://core.telegram.org/bots/api#orderinfo
 */
export type OrderInfo = {
  /** User name */
  name?: string,

  /** User's phone number */
  phone_number?: string,

  /** User email */
  email?: string,

  /** User shipping address */
  shipping_address?: ShippingAddress,
}

/**
 * This object contains information about an incoming shipping query.
 * @see https://core.telegram.org/bots/api#shippingquery
 */
export type ShippingQuery = {
  /** Unique query identifier */
  id: string,

  /** User who sent the query */
  from: User,

  /** Bot specified invoice payload */
  invoice_payload: string,

  /** User specified shipping address */
  shipping_address: ShippingAddress,
}

/**
 * This object contains information about an incoming pre-checkout query.
 * @see https://core.telegram.org/bots/api#precheckoutquery
 */
export type PreCheckoutQuery = {
  /** Unique query identifier */
  id: string,

  /** User who sent the query */
  from: User,

  /**
   * Three-letter ISO 4217 currency code
   * @see https://core.telegram.org/bots/payments#supported-currencies
   */
  currency: string,

  /**
   * Total price in the smallest units of the currency (integer, not float/double).
   * For example, for a price of US$ 1.45 pass amount = 145.
   * See the exp parameter in currencies.json,
   * it shows the number of digits past the decimal point for each currency
   * (2 for the majority of currencies).
   */
  total_amount: number,

  /** Bot specified invoice payload */
  invoice_payload: string,

  /** Identifier of the shipping option chosen by the user */
  shipping_option_id?: string,

  /** Order info provided by the user */
  order_info?: OrderInfo,
}

/**
 * This object represents an incoming update.
 * At most one of the optional parameters can be present in any given update.
 * @see https://core.telegram.org/bots/api#update
 */
export type Update = {
  /** The update‘s unique identifier. */
  update_id: number,

  /** New incoming message of any kind — text, photo, sticker, etc. */
  message?: Message,

  /** New version of a message that is known to the bot and was edited */
  edited_message?: Message,

  /** New incoming channel post of any kind — text, photo, sticker, etc. */
  channel_post?: Message,

  /** New version of a channel post that is known to the bot and was edited */
  edited_channel_post?: Message,

  /**
   * New incoming inline query
   * @see https://core.telegram.org/bots/api#inline-mode
   */
  inline_query?: InlineQuery,

  /**
   * The result of an inline query that was chosen by a user and sent to their chat partner.
   * @see https://core.telegram.org/bots/inline#collecting-feedback
   */
  chosen_inline_result?: ChosenInlineResult,

  /** New incoming callback query */
  callback_query?: CallbackQuery,

  /** New incoming shipping query. Only for invoices with flexible price */
  shipping_query?: ShippingQuery,

  /** New incoming pre-checkout query. Contains full information about checkout */
  pre_checkout_query?: PreCheckoutQuery,
}

