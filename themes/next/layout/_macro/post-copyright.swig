{% if page.original %}
<ul class="post-copyright">
  <li class="post-copyright-author">
    <strong>{{ __('post.copyright.author') + __('symbol.colon') }}</strong>
    {{ post.author | default(config.author) }}
  </li>
  <li class="post-copyright-link">
    <strong>{{ __('post.copyright.link') + __('symbol.colon') }}</strong>
    <a href="{{ post.url | default(post.permalink) }}" title="{{ post.title }}">{{ post.url | default(post.permalink) }}</a>
  </li>
  <li class="post-copyright-license">
    <strong>{{ __('post.copyright.license_title') + __('symbol.colon') }} </strong>
    {{ __('post.copyright.license_content', theme.post_copyright.license_url, theme.post_copyright.license) }}
  </li>
</ul>
{% endif %}
{% if !page.original && page.original_url %}
<ul class="post-copyright">
  <li class="post-copyright-link">
    <strong>原文地址:</strong>
    <a href="{{ page.original_url }}" rel="noreferrer">{{ page.original_url }}</a>
  </li>
</ul>
{% endif %}
