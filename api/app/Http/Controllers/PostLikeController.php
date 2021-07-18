<?php

namespace App\Http\Controllers;

use App\Events\PostLiked;
use App\Models\Post;
use Illuminate\Http\Request;

class PostLikeController extends Controller
{
  public function __sanctum()
  {
    $this->middleware(['auth:sanctum']);
  }

  public function store(Request $request, Post $post)
  {
    $like = $post->likes()->make();
    $like->user()->associate($request->user());

    $like->save();

    broadcast(new PostLiked($post))->toOthers();

    return response()->json([
      'likes' => $post->likes->count()
    ]);
  }
}
